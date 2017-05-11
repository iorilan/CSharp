<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HtmlControl.aspx.cs" Inherits="WebCode.Controls.HtmlControl" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <input runat="server" id="txtName" />
        <br />
        <input type="submit" id="btnSubmit" value="Submit"/>
    </div>
    
    

    <div>
        Hello , 
    <asp:Label runat="server" ID="lblName" ></asp:Label>
    </div>
    

    </form>
</body>
</html>
