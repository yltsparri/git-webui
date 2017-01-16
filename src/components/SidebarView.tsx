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

import React from 'react';
import GitBranch from '../actions/git/GitBranch';
import BranchStatus from '../actions/git/BranchStatus';
import { AppMode } from '../actions/AppState';

export interface SelectedItem {
  selectedItem: string;
  mode: AppMode;
}

export interface SidebarViewDataProps {
  dirName: string;
  viewOnly: boolean;
  mode: AppMode;
  selectedItem: string;
  localBranches: Array<GitBranch>;
  remoteBrances: Array<GitBranch>;
  tags: Array<GitBranch>;
}

export interface SidebarViewDispatchProps {
  onItemClicked(button: SelectedItem);
}

export interface SidebarViewProps extends SidebarViewDataProps, SidebarViewDispatchProps { }

export default class SidebarView extends React.PureComponent<SidebarViewProps, undefined>{
  render() {
    const {mode} = this.props;

    return <div id="sidebar">
      <a href="#" data-toggle="modal" data-target="#help-modal">
        <img id="sidebar-logo" src="/img/git-logo.png" />
      </a>
      <div id="sidebar-content" >
        {
          this.props.viewOnly ?
            null :
            <section id="sidebar-workspace"
              className={mode === AppMode.Workspace ? ' active' : ''}
              onClick={() => this.props.onItemClicked({ selectedItem: 'Workspace', mode: AppMode.Workspace })}>
              <h4>Workspace</h4>
            </section>
        }
        <section id="sidebar-remote"
          className={mode === AppMode.RemoteAccess ? ' active' : ''}
          onClick={() => this.props.onItemClicked({ selectedItem: 'Remote access', mode: AppMode.RemoteAccess })}>
          <h4>Remote access</h4>
        </section>
        <section id="sidebar-local-branches">
          <h4>Local Branches</h4>
          {this.renderItems(this.props.localBranches, AppMode.LocalBranches)}
        </section>
        <section id="sidebar-remote-branches">
          <h4>Remote Branches</h4>
          {this.renderItems(this.props.remoteBrances, AppMode.RemoteBranches)}
        </section>
        <section id="sidebar-tags">
          <h4>Tags</h4>
          {this.renderItems(this.props.tags, AppMode.Tags)}
        </section>
      </div>
    </div>;
  }

  renderItems = (items: Array<GitBranch>, type: AppMode) => {
    return <ul>
      {
        items.map((item: GitBranch) => this.getItem(item, type))
      }
    </ul>;
  }

  private getItem = (item: GitBranch, type: AppMode) => {
    const {selectedItem, mode} = this.props;
    let className = item.status & BranchStatus.Current ? 'branch-current' : '';

    if (selectedItem) {
      let sameName = selectedItem === item.name;
      let sameType = mode === type;
      if (sameName && sameType) {
        className += ' active';
      }
    }
    return <li className={'sidebar-ref ' + className}
      title={item.name}
      key={item.name}
      onClick={() => this.props.onItemClicked({ selectedItem: item.name, mode: type })}>{item.name} </li>;
  }
}
