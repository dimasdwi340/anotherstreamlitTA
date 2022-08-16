import streamlit as st
from streamlit_multipage import MultiPage


def input_page(st, **state):
    """See Example on Multipage"""


def compute_page(st, **state):
    """See Example on Multipage"""


def landing_page(st):
    """See Example on Landing Page"""


def footer(st):
    st.write("Developed by [ELC](https://elc.github.io)")


def header(st):
    st.write("This app is free to use")


def sidebar(st):
    st.button("Donate (Dummy)")


app = MultiPage()
app.st = st

app.start_button = "Go to the main page"
app.navbar_name = "Other Pages:"
app.next_page_button = "Next Chapter"
app.previous_page_button = "Previous Chapter"
app.reset_button = "Delete Cache"
app.navbar_style = "SelectBox"

app.header = header
app.footer = footer
app.navbar_extra = sidebar

app.hide_menu = True
app.hide_navigation = True

app.add_app("Landing", landing_page, initial_page=True)
app.add_app("Input Page", input_page)
app.add_app("BMI Result", compute_page)

app.run()