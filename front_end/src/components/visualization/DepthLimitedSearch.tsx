import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface TreeNode {
  id: string;
  children?: TreeNode[];
}

export const DepthLimitedSearch: React.FC = () => {
  const [depthLimit, setDepthLimit] = useState(3);
  const [visitedNodes, setVisitedNodes] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const tree: TreeNode = {
    id: "A",
    children: [
      {
        id: "B",
        children: [
          { id: "D" },
          { id: "E", children: [{ id: "H" }, { id: "I" }] }
        ]
      },
      {
        id: "C",
        children: [
          { id: "F", children: [{ id: "J" }] },
          { id: "G", children: [{ id: "K" }, { id: "L" }] }
        ]
      }
    ]
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 600;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const root = d3.hierarchy(tree);
    
    const treeLayout = d3.tree()
      .size([width - margin.left - margin.right, height - margin.top - margin.bottom]);

    const nodes = treeLayout(root);

    // Draw links
    g.selectAll(".link")
      .data(nodes.links())
      .join("path")
      .attr("class", "link")
      .attr("d", d3.linkVertical()
        .x(d => d.x)
        .y(d => d.y))
      .attr("fill", "none")
      .attr("stroke", "#4B5563")
      .attr("stroke-width", 2);

    // Draw nodes
    const node = g.selectAll(".node")
      .data(nodes.descendants())
      .join("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    node.append("circle")
      .attr("r", 20)
      .attr("fill", d => {
        const depth = d.depth;
        if (depth > depthLimit) return "#EF4444";
        return visitedNodes.includes(d.data.id) ? "#10B981" : "#6B7280";
      });

    node.append("text")
      .attr("dy", "0.31em")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text(d => d.data.id);

  }, [depthLimit, visitedNodes]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const dls = async (node: TreeNode, depth: number) => {
    if (depth < 0) return false;
    
    setVisitedNodes(prev => [...prev, node.id]);
    await sleep(1000);

    if (node.children) {
      for (const child of node.children) {
        if (!isSearching) return;
        await dls(child, depth - 1);
      }
    }
  };

  const startSearch = async () => {
    setIsSearching(true);
    setVisitedNodes([]);
    await dls(tree, depthLimit);
    setIsSearching(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4 items-center justify-center">
        <input
          type="number"
          value={depthLimit}
          onChange={(e) => setDepthLimit(Number(e.target.value))}
          min={0}
          max={5}
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-24"
        />
        <button
          onClick={() => isSearching ? setIsSearching(false) : startSearch()}
          className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600"
        >
          {isSearching ? 'Stop' : 'Start Search'}
        </button>
      </div>

      <svg
        ref={svgRef}
        width="800"
        height="600"
        className="mx-auto bg-gray-900 rounded-lg"
      />
    </div>
  );
};