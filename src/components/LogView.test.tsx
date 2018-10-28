import * as React from "react";
import { create } from "react-test-renderer";
import { CommitInfo } from "src/actions/AppState";
import { Circle, Graph, Path } from "src/actions/Commit";
import LogView from "./LogView";

it("matches snapshot", () => {
  const graph: Graph = {
    paths: new Array<Path>(),
    circles: new Array<Circle>()
  };

  const onClick = (_: CommitInfo) => {
    return;
  };
  const component = create(
    <LogView
      commits={new Array<CommitInfo>()}
      active={""}
      graph={graph}
      onCommitClicked={onClick}
    />
  );
  expect(component).toMatchSnapshot();
});
