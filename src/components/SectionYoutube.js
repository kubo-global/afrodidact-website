import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify, Link} from '../utils';

export default class SectionYoutube extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block text-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div className="inner">
                {_.get(this.props, 'section.url') && 
                <div className="cell block-content">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/kT6X8ctBIfU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                }
              </div>
            </section>
        );
    }
}
