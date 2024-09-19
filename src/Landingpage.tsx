import React from 'react';

export default function Landingpage() {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
        <p><strong>Name: Sizhu Qu</strong></p>
        <p><strong>Section: 02 </strong>Web Development - Fall 2024 </p>

        <h2><strong>Labs:</strong></h2>
        <ul>
          <li><a href="/Labs/Lab1">Lab 1</a></li>
          <li><a href="/Labs/Lab2">Lab 2</a></li>
          <li><a href="/Labs/Lab3">Lab 3</a></li>
        </ul>

        <h2><strong>Kanbas Application:</strong></h2>
        <ul>
          <li><a href="/Kanbas/Account">Kanbas Application</a></li>
        </ul>

        <h2><strong>GitHub Repository:</strong></h2>
        <ul>
          <li><a href="https://github.com/SizhuQu/kanbas-react-web-app.git">kanbas-react-web-app</a></li>
        </ul>
    </div>
    );
}

