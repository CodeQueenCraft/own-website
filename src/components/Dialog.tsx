import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Dialog.css";
import CardSlider from "./slider/CardSlider";

interface Project {
  img: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string;
  year: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  id?: string;
  selectedProjectIndex: number | null;
  projects: Project[];
}

const Dialog = ({
  isOpen,
  onClose,
  children,
  id,
  selectedProjectIndex,
  projects,
}: Props) => {
  const selectedProject =
    selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  const dialogPortal = isOpen
    ? ReactDOM.createPortal(
        <div className="dialog-overlay">
          <div className="dialog-border">
            <div className="close-button-wrapper">
              <button className="close-button" onClick={onClose}>
                Close
              </button>
            </div>

            <div className="dialog-content">
              <CardSlider></CardSlider>
            </div>
          </div>
        </div>,
        document.getElementById("dialog-root")!
      )
    : null;

  return <React.Fragment>{dialogPortal}</React.Fragment>;
};

export default Dialog;
