import React, { Component } from "react";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const buttons = ["Home", "About", "Resume", "Contact"];
    return (
      <React.Fragment>
        <header className="w-full fixed top-0 z-50  h-12 bg-transparent bg-black bg-opacity-60">
          <nav className="h-full flex items-center">
            {/* Mobile Menu Buttons */}
            <a
              className="lg:hidden fixed right-4 top-4 z-50 px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
              href="#nav-wrap"
              title="Show navigation"
            >
              Show navigation
            </a>
            <a
              className="lg:hidden fixed right-4 top-4 z-50 px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
              href="#"
              title="Hide navigation"
            >
              Hide navigation
            </a>

            {/* Navigation Menu */}
            <ul className="hidden lg:flex w-full justify-center items-center">
              {buttons.map((button) => {
                return (
                  <li key={button} className="px-4">
                    <a
                      href={"#" + button.toLowerCase()}
                      className="text-white hover:text-orange-400 transition-colors duration-300 text-lg font-medium"
                    >
                      {button}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        <div className="h-12"></div>
      </React.Fragment>
    );
  }
}
