import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center block w-full h-full bg-white opacity-75">
      <span className="block w-0 h-0 -mt-12 text-gray-600 opacity-75">
        <FontAwesomeIcon icon={faCircleNotch} size="2x" spin />
      </span>
    </div>
  );
}
