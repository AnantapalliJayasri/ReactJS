import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Routes,Route} from "react-router-dom";
import WebPage from './WebPage';
import { Stack,Button, Typography } from '@mui/material';

export default function Treeview() {
  return (
    <Stack>
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}>
      <TreeItem nodeId="1" label="Applications">
        <Button type="text" href={`register`}><TreeItem nodeId="2" label='Calendar'/></Button>
      </TreeItem>
    
    </TreeView>
    <Routes>
                
    <Route path='/register' element = {<WebPage/>}></Route>
    
</Routes>
</Stack>
  );
}