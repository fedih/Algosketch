import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

interface TreeNode {
  value: number;
  x: number;
  y: number;
  left?: TreeNode;
  right?: TreeNode;
}

export const BinarySearchTree: React.FC = () => {
  const [root, setRoot] = useState<TreeNode | null>(null);
  const [newValue, setNewValue] = useState<string>('');

  useEffect(() => {
    const svg = d3.select('#tree-container');
    if (!root) return;

    // Clear previous tree
    svg.selectAll('*').remove();

    // Draw tree
    const drawTree = (node: TreeNode) => {
      // Draw node
      svg
        .append('circle')
        .attr('cx', node.x)
        .attr('cy', node.y)
        .attr('r', 20)
        .attr('fill', '#10B981')
        .attr('stroke', '#064E3B');

      // Draw value
      svg
        .append('text')
        .attr('x', node.x)
        .attr('y', node.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', 'white')
        .text(node.value);

      // Draw edges to children
      if (node.left) {
        svg
          .append('line')
          .attr('x1', node.x)
          .attr('y1', node.y)
          .attr('x2', node.left.x)
          .attr('y2', node.left.y)
          .attr('stroke', '#4B5563')
          .attr('stroke-width', 2);
        drawTree(node.left);
      }

      if (node.right) {
        svg
          .append('line')
          .attr('x1', node.x)
          .attr('y1', node.y)
          .attr('x2', node.right.x)
          .attr('y2', node.right.y)
          .attr('stroke', '#4B5563')
          .attr('stroke-width', 2);
        drawTree(node.right);
      }
    };

    drawTree(root);
  }, [root]);

  const insertNode = (value: number) => {
    const insert = (node: TreeNode | null, level: number): TreeNode => {
      if (!node) {
        return {
          value,
          x: 400,
          y: level * 80 + 50
        };
      }

      if (value < node.value) {
        node.left = insert(node.left, level + 1);
        node.left.x = node.x - 100 / level;
      } else {
        node.right = insert(node.right, level + 1);
        node.right.x = node.x + 100 / level;
      }

      return node;
    };

    setRoot(root === null ? insert(null, 0) : insert(root, 0));
  };

  const handleInsert = () => {
    const value = parseInt(newValue);
    if (!isNaN(value)) {
      insertNode(value);
      setNewValue('');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4 items-center justify-center">
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
          placeholder="Enter a number"
        />
        <button
          onClick={handleInsert}
          className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600"
        >
          Insert
        </button>
      </div>

      <svg
        id="tree-container"
        width="800"
        height="600"
        className="mx-auto bg-gray-900 rounded-lg"
      />
    </div>
  );
};