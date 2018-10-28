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

import * as React from "react";
import Modal from "react-overlays/lib/Modal";

export interface ModalMessageProps {
  message: string;
  close: () => void;
}

export default class ModalMessage extends React.Component<ModalMessageProps> {
  public render() {
    if (!this.props.message || this.props.message === "") {
      return null;
    }
    return (
      <Modal
        onHide={this.props.close}
        show={true}
        containerClassName="modal-open"
        backdropClassName="modal fade in modal-backdrop"
        backdropStyle={{ display: "block" }}
      >
        <div
          className="modal fade in"
          style={{ display: "block" }}
          id="error-modal"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={this.props.close}
                  data-dismiss="modal"
                >
                  <span>&times;</span>
                  <span className="sr-only">Close</span>
                </button>
                <h4 className="modal-title">Error</h4>
              </div>
              <pre className="modal-body alert alert-danger">
                {this.props.message}
              </pre>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
