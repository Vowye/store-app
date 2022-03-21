import React from "react";
import TestRenderer from "react-test-renderer";

import Home from "../pages/Home";

it("renders", () => {
    TestRenderer.act(() => {
        TestRenderer.create(<Home />);
    });
});
