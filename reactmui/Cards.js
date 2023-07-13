const {Card, CardContent,TextField,Box, CardMedia, CardActions,Button } = require("@mui/material");

function Cards(){
    return(
        <Box width="300px">
            <Card>
                <CardMedia component = 'img' image = "Rose.jpg" alt = "rose">
                    
                </CardMedia>
                <CardContent>
                    <TextField label = 'Username' variant = 'outlined' color = 'success' size = 'small' required fullWidth></TextField>
                    <TextField label = 'Username' variant = 'outlined' color = 'success' size = 'small' required fullWidth></TextField>

                </CardContent>
                <CardActions>
                    <Button>Submit</Button>
                    <Button>Submit</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default Cards;