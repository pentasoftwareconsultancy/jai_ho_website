import React from "react";
import { Modal } from "react-bootstrap";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <Modal show={true} onHide={onClose} centered size="lg">
      <Modal.Body className="p-0">
        <button type="button" className="close p-2" onClick={onClose}>&times;</button>
        <iframe
          width="100%"
          height="400"
          src={videoUrl}
          title="Video Testimonial"
          allowFullScreen
        ></iframe>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
