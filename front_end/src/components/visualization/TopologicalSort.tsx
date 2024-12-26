import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node {
  id: string;
  dependencies: string[];
}

export const TopologicalSort: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([
    { id: 'A', dependencies: [] }, 
    { id: 'B', dependencies: ['A'] },
    { id: 'C', dependencies: ['A'] },
    { id: 'D', dependencies: ['B', 'C'] },
    { id: 'E', dependencies: ['C'] },
    { id: 'F', dependencies: ['D'] }
  ]);
  const [sortedNodes, setSortedNodes] = useState<string[]>([]);
  const [currentNode, setCurrentNode] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 600;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id((d: any) => d.id))
      .force("charge", d3.forceManyBody().strength(-1000))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const links = nodes.flatMap(node =>
      node.dependencies.map(dep => ({
        source: dep,
        target: node.id
      }))
    );

    const g = svg.append("g");

    // Draw arrows
    const defs = svg.append("defs");
    defs.append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "-0 -5 10 10")
      .attr("refX", 25)
      .attr("refY", 0)
      .attr("orient", "auto")
      .attr("markerWidth", 10)
      .attr("markerHeight", 10)
      .append("path")
      .attr("d", "M 0,-5 L 10,0 L 0,5")
      .attr("fill", "#4B5563");

    const link = g.selectAll(".link")
      .data(links)
      .join("line")
      .attr("class", "link")
      .attr("stroke", "#4B5563")
      .attr("stroke-width", 2)
      .attr("marker-end", "url(#arrowhead)");

    const node = g.selectAll(".node")
      .data(nodes)
      .join("g")
      .attr("class", "node")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended) as any);

    node.append("circle")
      .attr("r", 20)
      .attr("fill", d => {
        if (d.id === currentNode) return "#10B981";
        if (sortedNodes.includes(d.id)) return "#059669";
        return "#6B7280";
      });

    node.append("text")
      .attr("dy", "0.31em")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text(d => d.id);

    simulation
      .nodes(nodes as any)
      .on("tick", ticked);

    simulation.force<d3.ForceLink<any, any>>("link")!
      .links(links);

    function ticked() {
      link
        .attr("x1", d => (d.source as any).x)
        .attr("y1", d => (d.source as any).y)
        .attr("x2", d => (d.target as any).x)
        .attr("y2", d => (d.target as any).y);

      node
        .attr("transform", d => `translate(${(d as any).x},${(d as any).y})`);
    }

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
  }, [nodes, currentNode, sortedNodes]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const topologicalSort = async () => {
    setIsRunning(true);
    setSortedNodes([]);
    
    const visited = new Set<string>();
    const temp = new Set<string>();
    const sorted: string[] = [];

    const visit = async (nodeId: string) => {
      if (!isRunning) return;
      if (temp.has(nodeId)) throw new Error("Not a DAG");
      if (visited.has(nodeId)) return;

      temp.add(nodeId);
      setCurrentNode(nodeId);
      await sleep(1000);

      const node = nodes.find(n => n.id === nodeId)!;
      for (const dep of node.dependencies) {
        await visit(dep);
      }

      temp.delete(nodeId);
      visited.add(nodeId);
      sorted.unshift(nodeId);
      setSortedNodes(prev => [...prev, nodeId]);
    };

    try {
      for (const node of nodes) {
        if (!visited.has(node.id)) {
          await visit(node.id);
        }
      }
    } catch (error) {
      console.error(error);
    }

    setCurrentNode(null);
    setIsRunning(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <button
          onClick={() => isRunning ? setIsRunning(false) : topologicalSort()}
          className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600"
        >
          {isRunning ? 'Stop' : 'Start Topological Sort'}
        </button>
      </div>

      <svg
        ref={svgRef}
        width="800"
        height="600"
        className="mx-auto bg-gray-900 rounded-lg"
      />

      {sortedNodes.length > 0 && (
        <div className="text-center text-lg text-white">
          Topological Order: {sortedNodes.join(" → ")}
        </div>
      )}
    </div>
  );
};