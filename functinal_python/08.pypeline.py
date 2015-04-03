
bands = [{'name': 'sunset rubdown', 'country': 'UK', 'active': False},
         {'name': 'women', 'country': 'Germany', 'active': False},
         {'name': 'a silver mt. zion', 'country': 'Spain', 'active': True}]

#--------------------------
# procedural way

proc_bands = [{'name': 'sunset rubdown', 'country': 'UK', 'active': False},
         {'name': 'women', 'country': 'Germany', 'active': False},
         {'name': 'a silver mt. zion', 'country': 'Spain', 'active': True}]

def format_bands(proc_bands):
    for band in proc_bands:
        band['country'] = 'Canada'
        band['name'] = band['name'].replace('.', '')
        band['name'] = band['name'].title()

format_bands(proc_bands)
print proc_bands

#--------------------------
# functional way

func_bands = [{'name': 'sunset rubdown', 'country': 'UK', 'active': False},
         {'name': 'women', 'country': 'Germany', 'active': False},
         {'name': 'a silver mt. zion', 'country': 'Spain', 'active': True}]

def assoc(_d, key, value):
    from copy import deepcopy
    d = deepcopy(_d)
    d[key] = value
    return d

def set_canada_as_country(band):
    return assoc(band, 'country', 'Canada')

def strip_punctuation_from_name(band):
    return assoc(band, 'name', band['name'].replace('.', ''))

def capitalize_names(band):
    return assoc(band, 'name', band['name'].title())

# def pipeline_each(bands, funcs):
#     if not funcs:
#         return bands
#     else:
#         bands = map(funcs[0], bands)
#         return pipeline_each(bands, funcs[1:])

def pipeline_each(data, fns):
    return reduce(lambda a, x: map(x, a), fns, data)

print pipeline_each(func_bands, [set_canada_as_country,
                            strip_punctuation_from_name,
                            capitalize_names])

#==========================
# demonstrate
#==========================

