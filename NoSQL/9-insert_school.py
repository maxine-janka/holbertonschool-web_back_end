#!/usr/bin/env python3
"""This module contains a function that inserts a new document in a collection
and returns the new object id"""


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document into a collection"""
    new_document = mongo_collection.insert_one(kwargs)
    return new_document.inserted_id
