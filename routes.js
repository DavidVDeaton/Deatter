const displayContent = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url=="/profile") {
        res.setHeader('Content-Type', 'text/html');
        res.write("This is the profile page");
        return res.end();
    }

    else if (url == "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write("David Deaton");
        return res.end();
    }
    else if (url == "/settings" && method=="POST") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Form Submitted</h1>');
        return res.end();
    }
    
    else if (url == "/settings") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Settings</h1><form action="/settings" method="POST"><input type="text"><button type="submit">Press Me</button></form>');
        return res.end();
    }
}

module.exports = displayContent;