import {Typography} from '@mui/material';

function TypographyEx(){
    return(
        <div>
            <Typography>Hello World</Typography>
            {/* using h1 to h6 tags to variant prop */}
            <Typography variant = "h1">Hello World</Typography>
            <Typography variant = "h2">Hello World</Typography>
            <Typography variant = "h3">Hello World</Typography>

            <Typography variant = "h4">Hello World</Typography>
            <Typography variant = "h4" component = "h1">Hello World...</Typography>

            {/* to give space after rendering the ele we use gutterBottom prop */}
            <Typography variant = "h4" component = "h1" gutterBottom>Hello World...</Typography>

            <Typography variant = "h5">Hello World</Typography>
            <Typography variant = "h6">Hello World</Typography>
            {/* similar to h6 tag */}
            <Typography variant = "subtitle1">Hello World!</Typography>
            <Typography variant = "subtitle2">Hello World!</Typography>
            {/* similar to p tag  */}
            <Typography variant = "body1" gutterBottom>Hello World...</Typography>
            <Typography variant = "body2">Hello World...</Typography>
        </div>
    );
}

export default TypographyEx;