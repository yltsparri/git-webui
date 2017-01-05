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

interface Button{
  name: string;
  id: string;
}

interface TabBoxProps {
  buttons: Array<Button>;
  onClicked(button: Button);
}
export default class TabBox extends React.PureComponent<TabBoxProps, undefined>{

  render() {
    const buttons = this.props.buttons;
    return <ul className='nav nav-pills nav-justified' role='tablList'>
    {buttons.map((button) => <li onClick={this.onClick} key={button.id}><a href='#'>{button.name}</a></li>)}
    </ul>;
  }

  onClick = (button) => {
    this.props.onClicked(button);
  }
}
