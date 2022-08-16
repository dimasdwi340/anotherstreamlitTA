import streamlit as st
from coba import Multipage
from pages import data_upload, machine_learning, metadata, data_visualize, redundant

app = Multipage()

st.title("Data Storyteller")

app.add_page("Upload Data", data_upload.app)
app.add_page("Machine Learning", machine_learning.app)
app.add_page("Change Metadata", metadata.app)
app.add_page("Data Analysis", data_visualize.app)
app.add_page("Y Parameter Optimization", redundant.app)

app.run()