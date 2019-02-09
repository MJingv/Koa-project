module.exports = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>koa</title>
</head>
<body>
   <%if (user) {%>
       <h1><%= user.content %></h1>

    <h2><%= user.name %></h2>
<% }%>
</body>
</html>
`
