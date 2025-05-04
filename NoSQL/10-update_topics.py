#!/usr/bin/env python3
"""This modle containes a function that changes all 'topics' in a document
of a specified name"""


def update_topics(mongo_collection, name, topics):
    """Changes the 'topics' field in a document for a specified 'name'"""
    name = {"name": name}
    new_topics = {"$set": {"topics": topics}}
    mongo_collection.update_many(name, new_topics)
