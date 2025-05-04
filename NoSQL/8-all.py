#!/usr/bin/env python3
"""This module contains a functiont hat lists all documents in a collection
or returns an empty list if no documents exist"""


def list_all(mongo_collection):
    """Lists all documents in a collection"""
    documents = mongo_collection.find()
    return list(documents)
