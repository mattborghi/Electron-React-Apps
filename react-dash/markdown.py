import dash
import dash_core_components as dcc
import dash_html_components as html

# external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__) # , external_stylesheets=external_stylesheets

markdown_text = '''
### Dash and Markdown

Dash apps can be written in Markdown.
Dash uses the [CommonMark](http://commonmark.org/)
specification of Markdown.
Check out their [60 Second Markdown Tutorial](http://commonmark.org/help/)
if this is your first introduction to Markdown!
'''

ImageSource = 'img/logo_transparent.png'

app.layout = html.Div( 
    children = [
    dcc.Markdown(children=markdown_text),

    html.Div(
        html.Img(
            src=app.get_asset_url(ImageSource),
            style = {
                'marginLeft': 'auto',
                'marginRight': 'auto',
                'width': '50%',
                'display': 'block'
            }
        )
    )

])

if __name__ == '__main__':
    app.run_server(debug=True)