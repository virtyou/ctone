from setuptools import setup

setup(
    name='ctone',
    version="0.1.1",
    author='Mario Balibrera',
    author_email='mario.balibrera@gmail.com',
    license='MIT License',
    description='Virtual World resource plugin for cantools (ct)',
    long_description='Basic assets and resources, including maps, models, customs, templates, environments, morphs.',
    packages=[
        'ctone'
    ],
    zip_safe = False,
    install_requires = [
    ],
    entry_points = '''
        [console_scripts]
        ctone = ctone:do
    ''',
    classifiers = [
        'Development Status :: 3 - Alpha',
        'Environment :: Console',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Software Development :: Libraries :: Python Modules'
    ],
)
