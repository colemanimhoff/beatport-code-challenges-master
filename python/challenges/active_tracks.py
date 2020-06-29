"""
Given a list of track data, return the IDs of active tracks.
The list may contain duplicate tracks.

    [
        {
            'id': 1,
            'name': 'In Arms',
            'active': True,
        },
        {
            'id': 2,
            'name': 'Deep Dip',
            'active': False,
        },
        {
            'id': 3,
            'name': 'Panic Room',
            'active': True,
        },
        {
            'id': 1,
            'name': 'In Arms',
            'active': True,
        },
    ]  # should return [1, 3]

"""


def active_tracks(tracks):
    active_tracks = []
    tracks_dict = {}

    for track in tracks:
        id = track["id"]

        if id in tracks_dict or not track["active"]:
            continue
        else:
            tracks_dict[id] = True
            active_tracks.append(id)

    return active_tracks
