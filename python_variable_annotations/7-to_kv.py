#!/usr/bin/env python3
"""This modules contains a function that takes a st
and an int OR float and returns a tuple"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    return (k, v ** 2)
