

def generate_grid_items(count):
   return "".join([f'<div id = {i} alive=false class="grid-item">{i}</div>\n' for i in range(count)])

def generate_gird(template, rows_count):
    """
    Generate html file.
    :param template: html template
    :param rows_count: number of grid rows (columns will be the same)
    :return: new html
    :rtype: str
    """
    auto = 'auto ' * rows_count
    with open(template) as file:
        new_html = file.read()
    new_html = new_html.replace('{% COLUMNS %};', f'grid-template-columns: {auto};\n')
    new_html = new_html.replace('{% ITEM %};', generate_grid_items(rows_count * rows_count))
    return new_html

if __name__ == "__main__":
    with open('index.html', 'w') as index:
        index.write(generate_gird("template.html", 70))
