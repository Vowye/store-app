import React from "react";
import TestRenderer from "react-test-renderer";

import Cart from "../pages/Cart";

it("renders", () => {
    TestRenderer.create(<Cart />);
});
