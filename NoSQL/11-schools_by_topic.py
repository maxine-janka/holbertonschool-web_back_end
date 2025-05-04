#!/usr/bin/env python3
"""This module contains a function that finds a 'topic' value in document
with a 'topics' field """


def schools_by_topic(mongo_collection, topic):
    """Find and return list of documents that contain specified 'topic'
    from 'topics' field list"""
    matching_docs = mongo_collection.find({"topics": topic})
    return list(matching_docs)
