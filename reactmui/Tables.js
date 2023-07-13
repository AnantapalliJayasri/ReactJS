const { TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Paper, Box } = require("@mui/material");

function Tables(){
    return(
        //sx - inline styles.
        <TableContainer component={Paper} align = 'center' sx={{maxHeight : '100px;'}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1206</TableCell>
                        <TableCell>Jayasri</TableCell>
                        <TableCell>Chinni</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1210</TableCell>
                        <TableCell>Mohitha</TableCell>
                        <TableCell>Mohi</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
       
    )
}

export default Tables;