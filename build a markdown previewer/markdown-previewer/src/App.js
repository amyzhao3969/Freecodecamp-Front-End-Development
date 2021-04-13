import Badge from "react-bootstrap/Badge";
import React from 'react';
let marked = require('marked');

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    }
  }

  updateMarkdown(markdown) {
    this.setState({markdown});
  }

  render(){

  return (
    <div className="App">
      <div className="container">
        <div className='row mt-4'>
          <div className='col text-center'>
            <h1>
              <Badge className='text-align-center' variant='light'>
                Markdown Previewer
              </Badge>
            </h1>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-6 bg-light d-flex flex-column'>
              <h4 class='text-center my-3'>
                <Badge className='text-align-center' variant='secondary'>
                  Markdown Input
                </Badge>
              </h4>

              <h2 className='d-flex flex-column'>
                <textarea 
                    id='editor'
                    className='input form-control flex-grow-1' 
                    value={this.state.markdown} 
                    onChange={(e) => {this.updateMarkdown(e.target.value)}}> 
                </textarea>
              </h2>
          </div>


          <div className='col-6 bg-secondary'>
              <h4 class='text-center my-3'> 
                <Badge className='text-align-center' variant='secondary'>
                  Preview
                </Badge>
                <div 
                  id='preview'
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.markdown),
                  }}
                  ></div>
              </h4>
          </div>
        </div>
      </div>
    </div>
  );}
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)
`;