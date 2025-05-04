#!/usr/bin/env python3
"""A script that privudes stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017/')
    nginx = client.logs.nginx

    total_logs = nginx.count_documents({})
    print(total_logs, "logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        method_count = nginx.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, method_count))

    get_status_docs = nginx.count_documents(
        {"method": "GET", "path": "/status"}
        )
    print("{} status check".format(get_status_docs))
