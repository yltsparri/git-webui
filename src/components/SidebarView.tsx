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
import Modal from 'react-overlays/lib/Modal';

export interface NavNode {
  text: string;
  children: Array<NavNode>;
  id: string;
  parentId: string;
  props: { [key: string]: any };
}

export interface SidebarViewDataProps {
  dirName: string;
  viewOnly: boolean;
  selectedItem: string;
  nodes: Array<NavNode>;
  showAll?: string;
}

export interface SidebarViewDispatchProps {
  onItemClicked(button: NavNode);
  moreClicked(id: string);
}

export interface SidebarViewProps extends SidebarViewDataProps, SidebarViewDispatchProps { }

export default class SidebarView extends React.PureComponent<SidebarViewProps, undefined>{
  render() {
    const {nodes} = this.props;

    return <div id="sidebar">
      <a href="#" data-toggle="modal" data-target="#help-modal">
        <img id="sidebar-logo" src="/img/git-logo.png" />
      </a>
      {this.renderModal()}
      <div id="sidebar-content" >
        {
          nodes.map(node => {
            return <section id={'sidebar-' + node.id}>
              <h4 onClick={() => this.props.onItemClicked(node)} {...node.props}>{node.text}</h4>
              <ul>
                {this.renderItems(node.children, node)}
              </ul>
            </section>;
          })
        }
      </div>
    </div>;
  }

  renderItems = (items: Array<NavNode>, parentNode: NavNode) => {
    if (items.length > 6) {
      const showMoreLink = <li className={'sidebar-ref'}
        title='More ...'
        key={'$more$' + parentNode.id}
        onClick={() => this.props.moreClicked(parentNode.id)}>More ...</li>;
      return items.slice(0, 5)
        .map((item: NavNode) => this.getItem(item))
        .concat([showMoreLink]);
    }
    return items.slice(0, 6).map((item: NavNode) => this.getItem(item));
  }

  private getItem = (item: NavNode) => {
    const {selectedItem} = this.props;
    let className = '';

    if (selectedItem && selectedItem === item.id) {
      className += ' active';
    }
    return <li className={'sidebar-ref ' + className}
      title={item.text}
      key={item.id}
      onClick={() => this.props.onItemClicked(item)}
      {...item.props}>{item.text}</li>;
  }

  private renderModal = () => {
    const {showAll, nodes} = this.props;
    const allNode = nodes.find(n => n.id === showAll);
    return showAll ? <Modal onHide={() => this.props.moreClicked(null)}
      show={true}
      containerClassName='modal-open'
      backdropClassName='modal fade in modal-backdrop'
      backdropStyle={{ display: 'block' }}>
      <div className="modal fade in" style={{ display: 'block' }} id="error-modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" onClick={() => this.props.moreClicked(null)}>
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button><h4 className="modal-title">{allNode.text}</h4>
            </div>
            <div className="modal-body">
              <ul className='modal-list'>{allNode.children.map((item: NavNode) => this.getItem(item))}</ul>
            </div>
          </div>
        </div>
      </div>
    </Modal> : null;
  }
}
