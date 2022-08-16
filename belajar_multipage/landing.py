import streamlit as st
from streamlit_multipage import MultiPage


def input_page(st, **state):
    """See Example on Multipage"""


def compute_page(st, **state):
    """See Example on Multipage"""


def landing_page(st):
    st.title("This is a Multi Page Application")
    st.write("Feel free to leave give a star in the Github Repo")


app = MultiPage()
app.st = st

app.add_app("Landing", landing_page, initial_page=True)
app.add_app("Input Page", input_page)
app.add_app("BMI Result", compute_page)

app.run()