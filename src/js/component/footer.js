import React, { Component } from "react";
import { FaHeart } from "react-icons/fa6"
import "../../styles/footer.css";

export const Footer = () => (
	<div className="container">
	<footer className="footer mt-auto py-3 text-center">
		<p className="firma">
			Made with <FaHeart className="text-danger" /> by JulioCesarVD
		</p>
	</footer>
	</div>
);
