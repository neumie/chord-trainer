import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-3 p-3 text-xl">
        <li className="mr-auto">Chord Trainer</li>
        <li>Help</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;
