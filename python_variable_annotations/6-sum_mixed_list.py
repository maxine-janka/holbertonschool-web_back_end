#!/usr/bin/env python3
"""This module contains a function that takes a mixed list
of ints and floats and returns the sum"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of ints and floats in a list"""
    return sum(mxd_lst)
