using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebCode.Controls
{
    public partial class HtmlControl : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            txtName.ServerChange += ServerHtmlChange;

        }

        protected void ServerHtmlChange(object sender, EventArgs e)
        {
           var ctl = sender as System.Web.UI.HtmlControls.HtmlInputText;
            if (ctl != null) 
               lblName.Text = ctl.Value;
        }
    }
}