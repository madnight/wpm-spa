import * as React from 'react'
import { connect } from 'react-redux'

import { IStoreState } from '../store'

interface IInfoProps {
  author: string
  context: string
}

class SourceTextInfo extends React.Component<IInfoProps> {
  public render() {
    const { author, context } = this.props
    return (
      <div>
        -{author}, {context}
      </div>
    )
  }
}

const matchStateToProps = (state: IStoreState) => {
  return {
    author: state.textData.author,
    context: state.textData.context,
  }
}

export default connect(matchStateToProps)(SourceTextInfo)
