from flask import Flask
import pandas as pd
from flask import jsonify
import json
app = Flask(__name__)

def transform():
    filename1 = 'C:\\Users\\Bharathwaj\\Documents\\Flask\\theater_showtimes.json'
    filename2 = 'C:\\Users\\Bharathwaj\\Documents\\Flask\\movie_metadata.json'
    df1 = pd.read_json(filename1,orient="records")
    df2 = pd.read_json(filename2)
    json_array = df1["showtimes"].tolist()
    json_showtime = json.dumps(json_array)
    df_showtimes = pd.read_json(json_showtime, orient="records")
    df_showtimes_transpose = df_showtimes.T
    df_showtimes_transpose['show_id'] = df_showtimes_transpose.index
    df_showtimes_transpose = df_showtimes_transpose.reset_index(drop= True)
    df_showtimes_transpose.rename(columns={0:'Arclight',1:'PacificTheatres',2:'AMC','show_id':'Id'}, inplace=True)
    df_showtimes_theatre = df_showtimes_transpose[['Arclight','PacificTheatres','AMC']]
    df2.rename(columns={"id":'Id'}, inplace = True)
    df_merged = df_showtimes_transpose.merge(df2, on = "Id", how ='inner')
    return df_merged

@app.route("/Archlight", methods = ['GET'])
def Archlight():
    df_merged= transform()
    df_Arclight = df_merged[['title','rating','poster','Arclight']]
    df_Arclight = df_Arclight.query('Arclight.notnull()', engine ="python")
    df_Arclight = df_Arclight.sort_values(by="title")
    response = df_Arclight.to_json(orient='records')
    return response

@app.route("/Pacific", methods = ['GET'])
def Pacific():
    df_merged= transform()
    df_Pacific = df_merged[['title','rating','poster','PacificTheatres']]
    df_Pacific = df_Pacific.query('PacificTheatres.notnull()', engine ="python")
    df_Pacific = df_Pacific.sort_values(by="title")
    response = df_Pacific.to_json(orient = 'records')
    return response

@app.route("/AMC", methods =['GET'])
def AMC():
    df_merged= transform()
    df_Amc = df_merged[['title','rating','poster','AMC']]
    df_AMC_final = df_Amc.query('AMC.notnull()', engine ="python")
    df_AMC_final = df_AMC_final.sort_values(by="title")
    response = df_AMC_final.to_json(orient = 'records')
    return response





    