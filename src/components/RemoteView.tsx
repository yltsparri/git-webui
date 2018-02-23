/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';

export interface RemoteViewProps {
  repo: string;
}

export default class RemoteView extends React.PureComponent<RemoteViewProps, undefined> {

  render() {
    const {repo} = this.props;
    return <div className="jumbotron">
      <h1>Remote access</h1>
      <p>Git webui allows other people to clone and pull from your repository.</p>
      <div className="git-access">
        <p>Other people can clone your repository:</p>
        <pre className="git-clone">
          {"git clone http://" + document.location.hostname + ":" + document.location.port + "/ " + repo}
        </pre>
        <p>Or to pull from your repository:</p>
        <pre className="git-pull">
          {'git pull http://' + document.location.hostname + ':' + document.location.port + '/'}</pre>
      </div>
    </div>;
  }
}
