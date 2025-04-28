#!/usr/bin/env python3
"""This module contains a regular function that takes
an integer and returns an asyncio.Task object"""


import asyncio
wait_random = __import__("0-basic_async_syntax").wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Takes an integer and returns an asyncio.Task object for wait_random"""
    return asyncio.create_task(wait_random(max_delay))
