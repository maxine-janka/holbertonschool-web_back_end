#!/usr/bin/env python3
"""This modules contains an annotated function that takes a st
and an int OR float and returns a tuple"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Takes a str and int or float and returns a tuple"""
    return (k, v ** 2)
