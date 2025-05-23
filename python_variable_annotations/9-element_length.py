#!/usr/bin/env python3
"""This module contains an annotated function takes an interable
and returns a list of tuples containing the element index and the length
of each element"""


from typing import Sequence, List, Tuple, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Takes an interable and returns a list of tuples"""
    return [(i, len(i)) for i in lst]
