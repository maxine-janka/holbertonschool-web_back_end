#!/usr/bin/env python3
"""This module contains an annotated function that takes a float
and returns a callable function that multiplies the float"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Takes a float and returns a callback function
    that multiplies another float by original float 'multiplier'"""
    def callback(num: float) -> float:
        """Callback function that returns the product of
        a float and 'multiplier' float"""
        return num * multiplier
    return callback
