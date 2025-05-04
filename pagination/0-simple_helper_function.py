#!/usr/bin/env python3
"""This module contains a function that calculates the pagination parameters based on page and page size"""


def index_range(page, page_size):
    """Calculate the pagination parameters
    based on page and page size"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
