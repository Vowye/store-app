import React from "react";
import Home from "../pages/Home";
import TestRenderer from "react-test-renderer";

it("renders", () => {
    TestRenderer.create(<Home />);
});
