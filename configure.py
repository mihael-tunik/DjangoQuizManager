import yaml
import sys

import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--env_file', type=str, default='.env.yml')
args = parser.parse_args()
    
original_stdout = sys.stdout

with open(args.env_file, 'r') as env_file:
    data = yaml.safe_load(env_file)
    
    for module in data.keys():
        print(data[module])
        
        with open(data[module]['PATH'], 'w') as f:
            sys.stdout = f
            for k, v in data[module].items():
                if k != 'PATH':
                    print(f'{k}={v}')
            sys.stdout = original_stdout
