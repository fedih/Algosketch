import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

export const NetworkGraph: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let vertices: p5.Vector[] = [];
      let edges: [p5.Vector, p5.Vector][] = [];
      const n = 10; // Number of nodes
      const radius = 200; // Radius for nodes distribution
      const greyColor = p.color(169, 169, 169);

      const generateGraph = () => {
        // Create nodes (vertices) distributed in 3D space
        for (let i = 0; i < n; i++) {
          const angle = p.map(i, 0, n, 0, p.TWO_PI);
          const x = radius * p.cos(angle);
          const y = radius * p.sin(angle);
          const z = p.random(-200, 200);
          vertices.push(p.createVector(x, y, z));
        }
        
        // Create edges (connect nodes)
        for (let i = 0; i < vertices.length; i++) {
          for (let j = i + 1; j < vertices.length; j++) {
            edges.push([vertices[i], vertices[j]]);
          }
        }
      };

      p.setup = () => {
        p.createCanvas(700, 600, p.WEBGL);
        p.noFill();
        p.strokeWeight(2);
        generateGraph();
      };

      p.draw = () => {
        p.background(0, 0, 0, 0);
        
        // Rotate around X, Y, and Z axes
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.rotateZ(p.frameCount * 0.01);
        
        // Draw edges in grey color
        edges.forEach(([v1, v2]) => {
          p.stroke(greyColor);
          p.line(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
        });
        
        // Draw nodes (vertices) in grey color
        vertices.forEach(v => {
          p.stroke(greyColor);
          p.push();
          p.translate(v.x, v.y, v.z);
          p.sphere(5);
          p.pop();
        });
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute top-1/2 -translate-y-1/2 right-0 opacity-40"
      style={{ zIndex: 0 }}
    />
  );
};