import React from 'react';

class FileList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            loadedFiles: false,
            JSONfiles: [],
        };
    }

    handleChange = (event) => {
        let filelist = event.target.files
        let fileJSON = [];
        // Create the JSON structure
        for(var i=0; i<filelist.length;i++){
            var fileObject = filelist[i];
            var newObject  = {
                'lastModified'     : fileObject.lastModified,
                'lastModifiedDate' : fileObject.lastModifiedDate,
                'name'             : fileObject.name,
                'size'             : fileObject.size,
                'type'             : fileObject.type,
                'path'             : fileObject.webkitRelativePath,
             };  
            // console.log(fileObject);
            // console.log(JSON.stringify( newObject ));
            fileJSON.push(newObject);
            //console.log(filelist[i].webkitRelativePath);
        }
        console.log(fileJSON);
        let state = this.state.loadedFiles
        this.setState({
            files: filelist,
            loadedFiles: !state,
            JSONfiles: fileJSON, 
        });
        
    }

    render (){
        const listOfFiles = Object.values(this.state.JSONfiles).map(file => (
            <li key={file.name}>
              {file.path} : {file.size} bytes
            </li>
          ));

        return(
            <form>
                <input 
                    type="file" 
                    multiple
                    directory="" 
                    webkitdirectory=""
                    onChange={(e) => this.handleChange(e)}
                    files={this.state.files}
                    />
                { this.state.loadedFiles &&
                <aside>
                    <h4>Loaded files</h4>
                    <ul>{listOfFiles}</ul>
                </aside>
                }
            </form>
        );
    }
}

export default FileList;